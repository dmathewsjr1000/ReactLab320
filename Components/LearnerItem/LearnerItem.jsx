import PropTypes from 'prop-types'
import '../LearnerItem/LearnerItem.css'


function LearnerItem({student}) {
    console.log(student);
    const scoresJSX = student.scores.map((item) => (
        <div className='scoresTable'>
            
            <h3>{item.date}</h3> 
            <h4>{item.score}</h4>
            
        </div>
          
        ));
    return (
        <main>
            <div className='bioContainer'>
            <h1>{student.name}</h1>
            <p>{student.bio}</p>
            <hr />
            <h1>Grades</h1>
            <div className='scoresContainer'>
            {scoresJSX}
            </div>
            </div>
        </main>
    );
}

LearnerItem.propTypes = {
    learner: PropTypes.object
}

export default LearnerItem;