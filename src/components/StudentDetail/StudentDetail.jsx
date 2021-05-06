import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StudentDetail(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = () => {
    dispatch( {type: 'SET_EDIT_STUDENT', payload: props.student});
    history.push('/detail');
  }

  return (
    <tr>
      <td>{props.student.github_name}</td>
      <td><button onClick={handleEdit}>Edit!</button></td>
    </tr>
  );
}

export default StudentDetail;
