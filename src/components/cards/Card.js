import './Card.css';
import getAllDevelopers from '../../api/developers';
import { useState, useEffect } from 'react';
import FilterBar from '../filteringBar/FilterBar';

const Card = () => {
  const [allDevelopers, setAllDevelopers] = useState([]);
  const [clickedTag, setClickedTag] = useState([]);
  const [reset, setReset] = useState(false)

  useEffect(() => {
    getAllDevelopers().then((res) => {
      setAllDevelopers(res);
    });
  }, []);

  const handleTag = (event) => {
    setReset(true)
    const tagName = event.target.innerHTML;

    if (!clickedTag.includes(tagName)) {
      const newTags = [...clickedTag, tagName];
      console.log(newTags)
      setAllDevelopers(allDevelopers.filter((value) => newTags.every(element => value.skills.includes(element) ? value : "")))
      setClickedTag(newTags);
    }
  };

  const deleteTag = (tagName) => {
    setClickedTag([])
    let getAll = getAllDevelopers().then(res => setAllDevelopers(res))
    setReset(false)
  };

  return (
    <>
      <FilterBar tag={clickedTag} onDeleteTag={deleteTag} reset={reset} />

      {allDevelopers.map((developer) => (
        <div className='d-flex m-auto align-items-center' style={{ width: "60vw", margin: "1rem" }} key={developer.imgName}>
          <div className="card-body d-flex align-items-center justify-content-between" style={{ width: "60vw", padding: "1rem" }}>
            <div className='d-flex rounded'>
              <img className='rounded' src={developer.imgUrl} alt='photosnap' />
              <div className='d-flex flex-column'>
                <h5 style={{ marginBottom: "0px" }}>{developer.imgName}</h5>
                <p style={{ marginBottom: "0px" }}>{developer.developerLevel}</p>
                <div className='d-flex'>
                  <h6 style={{ margin: "0 1rem 0 0" }}>{developer.timePeriod}</h6>
                  <h6 style={{ marginBottom: "0px" }}>{developer.place}</h6>
                </div>
              </div>
            </div>
            <div className='tags d-flex fw-bold'>
              {developer.skills.map((skill, index) => (
                <button key={index} type="button" onClick={(e) => handleTag(e)} style={{ backgroundColor: "rgb(167 205 205)", fontSize: "x-small", marginRight: "5px", boxShadow: "1px 1px 10px hsl(180, 21%, 67%)" }} className="btn badge">{skill}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
