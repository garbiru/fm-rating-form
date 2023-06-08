import { useState } from "react";
import CirclesNav from "./CirclesNav";
import IconStar from "../assets/icon-star.svg";
import IconThankyou from "../assets/illustration-thank-you.svg";

import classes from "./Form.module.css";

const Form = () => {
	const [rating, setRating] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (rating === 0) return;

		setIsSubmitted(true);
	};

	return (
		<>
			{!isSubmitted && (
				<form onSubmit={handleSubmit} className={classes.form}>
					<div className={classes.circle}>
						<img
							src={IconStar}
							alt="icon star"
							className={classes.iconStar}
						/>
					</div>
					<h1>How did we do?</h1>
					<p>
						Please let us know how we did with your support request.
						All feedback is appreciated to help us imporve our
						offering!
					</p>

					<CirclesNav
						number={5}
						selectedRating={rating}
						changeRating={setRating}
					/>
					<button type="submit" className={classes.button}>
						SUBMIT
					</button>
				</form>
			)}
			{isSubmitted && (
				<div className={classes.formSubmitted}>
					<img src={IconThankyou} alt="Thank you!" />
					<span className={`${classes.rating}`}>
						You selected {rating} out of 5
					</span>

					<h1>Thank you!</h1>
					<p>
						We appreciate you taking the time to give us a rating.
						If you ever need more support, don't hesitate to get in
						touch.
					</p>
				</div>
			)}
		</>
	);
};

export default Form;
