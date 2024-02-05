import Tour from "./Tour";
import Title from "./Title";
import { useState } from 'react';
import { tours } from "../data";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteItem = (itemId) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  }

  return (
	<div>
	<section className="section" id="tours">
		<Title title="featured" span="tours" />
		<div className="section-center featured-center">
			{tours.map((tour) => (
				<Tour key={tour.id} {...tour} handleDeleteItem={handleDeleteItem} />
			))}
		</div>
	</section>
</div>
  );
}

export default Tours;