import React from 'react';
import './BookShelf.scss';

const BookShelf = () => {
  return (
//    <div>
//     <table  style={{marginLeft:'-3px', width:'100%'}}>
//   <tbody>
//     <tr class="bookshelf">
//       <td>
//         <span class="bookshelf__title"> 
//         <a href="/books/tag/all/NCERT/12th/" 
//         class="bookshelf__name-link"> Liveurlifehere Education Bookself
//          </a> 
//         <a href="http://blog.liveurlifehere.com/2014/02/make-bookshelf-page-website-using-css.html" 
//         style={{display:'tableCell',vertical-align:'middle',textAlign:'right'}} class="bookshelf-more-link"> 
//         <b class="roundedges" style={{marginRight:'5px',padding:'5px',backgroundColor:'rgba(255,255,255,0.5)',color:'#333'}}>Back</b>
//         </a>
//         </span>
//         <div class="grid_11 alpha omega bookshelf-body">
//           <div class="grid_10 alpha omega" 
//           style={{paddingLeft:40px'}}> 
//           <span style={{float: 'left',padding:'8px 0px 36px 0px',height:'150px',display:'block'}}>
//             <div style={{float: 'left'}}> 
//             <a href="#">
//               <div class="caption-wrapper" 
//               style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 111px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img alt="Accountancy 1 Class 12" 
//                 title="Accountancy 1 Class 12" 
//                 src="images/rack1/Accountancy_1_Class_12_150x150.jpg" rel="book_thumb_8" 
//                 class=" captify  book_thumb" 
//                 style="border: 0px none; margin: 0px;"/>
//                 <div class="caption-bottom" 
//                 style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 116px; height: 38.40625px;">

//                 </div>
//                 <div class="caption-bottom" 
//                 style="margin: -52px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;"> 
//                 <a href="#" class="thumblink" style="margin: 0px;"> Accountancy 1 Class 12 </a> 
//                 </div>
//               </div>
//               </a> </div>
//             </span> <span style="float:left;padding:8px 0px 36px 0px;height:150px;display:block">
//             <div style="float: left;"> <a href="#">
//               <div class="caption-wrapper" 
//               style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 113px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img alt="Accounting 2 Class 12" 
//                 title="Accounting 2 Class 12" 
//                 src="images/rack1/Accounting_2_Class_12_150x150.jpg" rel="book_thumb_9" 
//                 class=" captify  book_thumb" 
//                 style="border: 0px none; margin: 0px;"/>
//                 <div 
//                 class="caption-bottom" 
//                 style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 118px; height: 38.40625px;">

//                 </div>
//                 <div class="caption-bottom"
//                 style="margin: -52px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;">
//                    <a href="#" class="thumblink" style="margin: 0px;"> Accounting 2 Class 12 </a>
//                     </div>
//               </div>
//               </a>
//                </div>
//             </span>
//              <span 
//              style="float:left;padding:8px 0px 36px 0px;height:150px;display:block">
//             <div style="float: left;">
//                <a href="#">
//               <div class="caption-wrapper"
//                style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 114px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img 
//                 alt="Business Studies 1 Class 12" 
//                 title="Business Studies 1 Class 12" 
//                 src="images/rack1/Business_Studies_1_Class_12_150x150.jpg" rel="book_thumb_10" 
//                 class=" captify  book_thumb"
//                  style="border: 0px none; margin: 0px;"/>
//                 <div class="caption-bottom" 
//                 style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 119px; height: 38.40625px;">

//                 </div>
//                 <div class="caption-bottom"
//                  style="margin: -52px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;"> 
//                  <a href="#" class="thumblink" 
//                  style="margin: 0px;"> Business Studies 1 Class 12 </a>
//                   </div>
//               </div>
//               </a> </div>
//             </span>
//              <span style="float:left;padding:8px 0px 36px 0px;height:150px;display:block">
//             <div style="float: left;">
//                <a href="#">
//               <div class="caption-wrapper" 
//               style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 117px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img alt="Business Studies 2 Class 12" 
//                 title="Business Studies 2 Class 12" 
//                 src="images/rack1/Business_Studies_2_Class_12_150x150.jpg" rel="book_thumb_11" 
//                 class=" captify  book_thumb" 
//                 style="border: 0px none; margin: 0px;"/>
//                 <div class="caption-bottom"
//                  style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 122px; height: 38.40625px;">

//                  </div>
//                 <div class="caption-bottom" 
//                 style="margin: -52px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;"> 
//                 <a href="#" class="thumblink" 
//                 style="margin: 0px;"> Business Studies 2 Class 12 </a> 
//                 </div>
//               </div>
//               </a> </div>
//             </span> 
//             <span style="float:left;padding:8px 0px 36px 0px;height:150px;display:block">
//             <div style="float: left;">
//                <a href="#">
//               <div class="caption-wrapper" 
//               style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 117px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img alt="Chemistry 1 Class 12" 
//               title="Chemistry 1 Class 12"
//               src="images/rack1/Chemistry_1_Class_12_150x150.jpg" rel="book_thumb_12"
//                class=" captify  book_thumb"
//                 style="border: 0px none; margin: 0px;"/>
//                 <div class="caption-bottom" 
//                 style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 122px; height: 38.40625px;"></div>
//                 <div class="caption-bottom"
//                  style="margin: -52px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;">
//                    <a href="#" class="thumblink" style="margin: 0px;"> Chemistry 1 Class 12 </a> </div>
//               </div>
//               </a> 
//               </div>
//             </span>
//              <span style="float:left;padding:8px 0px 36px 0px;height:150px;display:block">
//             <div style="float: left;">
//                <a href="#">
//               <div class="caption-wrapper" 
//               style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 117px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img alt="Chemistry 2 Class 12" 
//                 title="Chemistry 2 Class 12" 
//                 src="images/rack1/Chemistry_2_Class_12_150x150.jpg" rel="book_thumb_13" 
//                 class=" captify  book_thumb" 
//                 style="border: 0px none; margin: 0px;"/>
//                 <div class="caption-bottom" 
//                 style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 122px; height: 38.40625px;"></div>
//                 <div class="caption-bottom" 
//                 style="margin: -52px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;">
//                    <a href="#" class="thumblink" style="margin: 0px;"> Chemistry 2 Class 12 </a>
//                     </div>
//               </div>
//               </a> 
//               </div>
//             </span> 
//             <span style="float:left;padding:8px 0px 36px 0px;height:150px;display:block">
//             <div style="float: left;"> 
//             <a href="#">
//               <div class="caption-wrapper" 
//               style="overflow: hidden; padding: 0px; font-size: 0.1px; width: 97px; height: 150px; margin: 5px; border: 0px none rgb(0, 147, 204);">
//                 <img alt="Flamingo English Class 12"
//                  title="Flamingo English Class 12" 
//                  src="images/rack1/Flamingo_English_Class_12_150x150.jpg" rel="book_thumb_14"
//                   class=" captify  book_thumb" 
//                   style="border: 0px none; margin: 0px;"/>
//                 <div class="caption-bottom"
//                  style="margin: 0px; z-index: 1; position: relative; opacity: 0.7; width: 102px; height: 57.40625px;"></div>
//                 <div class="caption-bottom" 
//                 style="margin: -71px 0px 0px; padding-top: 9px; position: relative; z-index: 2; background-image: none; border: 0px none; opacity: 1; width: 100%; background-position: initial initial; background-repeat: initial initial;"> 
//                 <a href="#" class="thumblink" style="margin: 0px;"> Flamingo English Class 12 </a> </div>
//               </div>
//               </a> </div>
//             </span> <span style={{float:'left',padding:'8px 0px 36px 0px',height:'150px',display:'block'}}>
//             <div style={{float: 'left'}}> 
//             <a href="w">
//               <div class="caption-wrapper"
//                style={{overflow: 'hidden', padding:'0px', fontSize: '0.1px', width:'111px', height: '150px', margin:'5px', border: '0px none rgb(0, 147, 204)'}} >
//                 <img alt="Fundamentals of Human Geography Class 12" title="Fundamentals of Human Geography Class 12" 
//                 src="images/rack1/Fundamentals_of_Human_Geography_Class_12_150x150.jpg" rel="book_thumb_15" 
//                 class=" captify  book_thumb" 
//                 style={{border:'0px none' ,margin: '0px'}}/>

//                 <div class="caption-bottom"
//                  style={{margin: '0px', zIndex: '1',position: 'relative', opacity: '0.7', width: '116px', height: '76.40625px'}}></div>
//                 <div class="caption-bottom"
//                  style={{margin: '-90px 0px 0px', paddingTop: '9px',position: 'relative' ,zIndex:'2', backgroundImage: 'none', border:'0px none', opacity: '1', width: '100%' ,backgroundPosition: 'initial initial', backgroundRepeat: 'initial initial'}}>
//                    <a href="w" class="thumblink" style={{margin: '0px'}}> Fundamentals of Human Geography Class 12 </a>
//                     </div>
//               </div>
//               </a> 
//               </div>
//             </span> </div>
//         </div></td>
//     </tr>
//     <tr>
//       <td>&nbsp;</td>
//     </tr>
//   </tbody>
// </table>
{/* <div style="float: right"> </div>
  </div> */}
  );
};

export default BookShelf;
