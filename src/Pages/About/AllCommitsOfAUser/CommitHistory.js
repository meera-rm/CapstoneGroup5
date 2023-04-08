import { useState, useEffect } from 'react';
import './CommitHistory.scss';
import { Octokit } from '@octokit/core';
// const singleUser = `https://api.github.com/users/meera-ramesh19`
// const repos = `https://api.github.com/users/meera-ramesh19/repos?per_page=5`
// https://api.github.com/users/meera-ramesh19/repos?page=1&per_page=10&sort=updated

function CommitHistory() {
  const [commits, setCommits] = useState([]);

  // Change this to any username whose repositories you want to get
  const octokit = new Octokit({ auth: process.env.TOKEN });

  useEffect(() => {
    async function getCommits() {
      const owner = 'meera-ramesh19',
        repo = 'CapstoneGroup5',
        perPage = 5;

      const commitObject = await octokit.request(
        `GET /repos/{owner}/{repo}/commits`,
        {
          owner,
          repo,
          per_page: perPage,
        }
      );
      // console.log(commitObject.data);
      setCommits(commitObject.data);
    }
    getCommits();
  }, []);

  function generateDays(dateStr) {

    let committed_Date = new Date(dateStr);
    let todays_Date = new Date();
    let timeDifference = committed_Date.getTime() - todays_Date.getTime();
    let dayMilliSeconds = 1000 * 60 * 60 * 24;
    let totalDays = Math.abs(timeDifference / dayMilliSeconds); // it returns negative value if start date < end date
    totalDays = Math.floor(totalDays);
    return totalDays; 
  }


  return (
    <>
       <div className="latestChanges"> 
        <div className="latestChanges__title">Lastest project commits</div>
        {commits?.map((commit) => (
            
            <div className="latestChanges__item">
                <div className="latestChanges__progress">
                    <div className="latestChanges__progressBall"></div>
                </div>
                <div className="lastestChanges__itemContent">
                   <div className="latestChanges__timeAgo">{generateDays(commit.commit.committer.date)}<span>days ago</span></div>
                    <div className="latestChanges__message">{commit.commit.message.trim()}</div>
                </div>
            </div>
            
             ))}
         
          {/* <div className="latestChanges__changeLog"> View changelog </div>*/}
         </div>  
    </>
  );
}

export default CommitHistory;

