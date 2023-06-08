import classes from "./CirclesNav.module.css";

const CirclesNav = ({ number, selectedRating, changeRating }) => {
	const circles = [];

	for (let i = 0; i < number; i++) {
		circles.push(i + 1);
	}

	const circlesjsx = circles.map((circle) => {
		return (
			<div
				key={circle}
				onClick={() => changeRating(circle)}
				className={`${classes.circle} ${
					circle === selectedRating ? classes.selected : ""
				}`}
			>
				{circle}
			</div>
		);
	});

	return <div className={classes.circles}>{circlesjsx}</div>;
};

export default CirclesNav;
