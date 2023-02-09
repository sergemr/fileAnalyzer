import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Members.module.css';
const API_URL = 'http://localhost:5001/members';

const Members = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return(

  <div className={styles.Members}>
    Members Component
    <ul>
      {data?.members.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  </div>
)};

Members.propTypes = {};

Members.defaultProps = {};

export default Members;
