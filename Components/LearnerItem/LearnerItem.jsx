import PropTypes from 'prop-types'


function LearnerItem({student}) {
    console.log(student);
    const scoresJSX = student.scores.map((item) => (
        <>
        <h3>{item.date}</h3> 
        <h4>{item.score}</h4>
        </>
          
        ));
    return (
        <div>
            <h1>{student.name}</h1>
            <p>{student.bio}</p>
            {scoresJSX}
        </div>
    );
}

LearnerItem.propTypes = {
    learner: PropTypes.object
}

export default LearnerItem;