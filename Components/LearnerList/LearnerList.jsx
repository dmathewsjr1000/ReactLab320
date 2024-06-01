import LearnerItem from "../LearnerItem/LearnerItem";
import PropTypes from "prop-types";


function LearnerList( { learners } ) {
    const studentJSX = learners.map((item) => ( <LearnerItem student={item} key={item.id} /> 
));
    return (
        <div>
             {studentJSX}
        </div>
    );
}

LearnerList.propTypes = {
    student: PropTypes.array,
}

export default LearnerList;