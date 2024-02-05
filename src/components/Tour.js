import React, { useState } from 'react';

// const Review = ({ item, onDelete }) => {
// 	const [expanded, setExpanded] = useState(false);
  
// 	const toggleDescription = () => {
// 	  setExpanded(!expanded);
// 	};
  
// 	const handleDelete = () => {
// 	  onDelete(item.id); // Pass the item's ID to the parent component for deletion
// 	};
// };  

// function Tour({ image, date, info, title, location, cost, duration }) {
// 	const Review = ({ item, onDelete }) => {
// 		const [expanded, setExpanded] = useState(false);
	  
// 		const toggleDescription = () => {
// 		  setExpanded(!expanded);
// 		};
	  
// 		const handleDelete = () => {
// 		  onDelete(item.id); // Pass the item's ID to the parent component for deletion
// 		};
// 	return (
// 		<article className="tour-card">
// 			<div className="tour-img-container">
// 				<img src={image} className="tour-img" alt="Tibet Adventure" />
// 				<p className="tour-date">{date}</p>
// 			</div>
// 			<div className="tour-info">
// 				<div className="tour-title">
// 					<h4>{title}</h4>
// 					{/* <button onClick={toggleDescription}>
//           			{expanded ? 'Hide Description' : 'Show Description'}
//         			</button> */}
// 					<button onClick={handleDelete} className="delete-button">
// 					Delete
// 					</button>
// 				</div>
// 				<p>{info}</p>
// 				<div className="tour-footer">
// 					<p>
// 						<span>
// 							<i className="fas fa-map"></i>
// 						</span>
// 						{location}
// 					</p>
// 					<p>from ${cost}</p>
// 					<p>{duration} days</p>
// 				</div>
// 			</div>
// 		</article>
// 	);
// }};

// export default Tour;





const Tour = ({ image, date, title, info, location, id, onDelete }) => {
  const [visible, setVisible] = useState(true);

  const handleDelete = () => {
    onDelete(id); // Pass the tour's ID to the parent component for deletion
    setVisible(false); // Hide the tour
  };

  if (!visible) {
    return null; // If the tour is not visible, don't render anything
  }

  return (
    <div className="tour">
      <div className="tour-img-wrapper">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
          <button onClick={handleDelete} className="delete-button">
            Not Interested
          </button>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tour;