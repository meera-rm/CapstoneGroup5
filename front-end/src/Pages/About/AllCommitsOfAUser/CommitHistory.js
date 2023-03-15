import { useState, useEffect } from 'react';
import './CommitHistory.scss';
import { Octokit } from "@octokit/core";
// const singleUser = `https://api.github.com/users/meera-ramesh19`
// const repos = `https://api.github.com/users/meera-ramesh19/repos?per_page=5`
// https://api.github.com/users/meera-ramesh19/repos?page=1&per_page=10&sort=updated

function CommitHistory() {

  console.log('inside AllReposInfo');
  const [commits, setCommits] = useState([]);
  // Change this to any username whose repositories you want to get
  const octokit = new Octokit({ auth: process.env.TOKEN  });
  useEffect(() => {
    async function getCommits() {
        const owner = 'meera-ramesh19',
        repo = 'CapstoneGroup5',
        perPage = 5;;
        const fiveMostRecentCommits=  await  octokit
           .request( `GET /repos/{owner}/{repo}/commits/`, { owner, repo, per_page: perPage })
           .then(console.log, console.log);
        setCommits(fiveMostRecentCommits);
    }
    getCommits();
  }, [])
 
  return (
         <>
         <ul>
            {commits.data?.map(commit => (
            <li key={commit.id}>
                {commit.name}: {commit.message}
                {/* {commit.committer.date}:{commit.message} */}
            </li>
            ))}
        </ul>
      {/* <div className="latestChanges"> 
            <div className="latestChanges__title">Lastest changes</div>

            <div className="latestChanges__item">
                <div className="latestChanges__progress">
                <div className="latestChanges__progressBall"></div>
                </div>
                <div className="lastestChanges__itemContent">
                <div className="latestChanges__timeAgo">3 days ago</div>
                <div>Secret scanning alerts link to provides' doc</div>
                </div>
            </div>
            <div className="latestChanges__item">
                <div className="latestChanges__progress">
                <div className="latestChanges__progressBall"></div>
                </div>
                <div className="latestChanges__itemContent">
                <div className="latestChanges__timeAgo">3 days ago</div>
                <div>Github Actions: SBOMs now attached to hosted runner image releases for Ubuntu & Windows</div>
                </div>
            </div>
            <div className="latestChanges__item">
                <div className="latestChanges__progress">
                <div className="latestChanges__progressBall"></div>
                </div>
                <div className="latestChanges__itemContent">
                <div className="latestChanges__timeAgo">3 days ago</div>
                <div>Secret scanning alerts link to provides' doc</div>
                </div>
            </div>
            <div className="latestChanges__item">
                <div className="latestChanges__progress">
                <div className="latestChanges__progressBall"></div>
                </div>
                <div className="latestChanges__itemContent">
                <div className="latestChanges__timeAgo">3 days ago</div>
                <div>Secret scanning alerts link to provides' doc</div>
                </div>
            </div>

            <div className="latestChanges__changeLog"> View changelog </div>
         </div> */} 
         </>
   )
  }

  export default CommitHistory;