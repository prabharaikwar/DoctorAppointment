import React, { useState, useEffect } from "react";
import "./DoctorSearch.css";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allDoctorsAsync } from "../../redux/reducers/DoctorReducer";

const DoctorSearch = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.doctor);
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (city) {
      dispatch(allDoctorsAsync(city));
    }
  }, [dispatch, city]);

  const handleSearch = () => {
    if (city) {
      dispatch(allDoctorsAsync(city));
    }
  };

  const handleBlur = () => {
    setShowResults(false);
  };

  const handleDoctorSelection = (doctorData) => {    
    // navigate("/booking", { state: { selectedDoctor: doctorData } });
    // dispatch(setSelectedDoctor(doctorData));
  };


  return (
    <div className="doctor-search-container">
      <Form inline={"true"} className="position-relativ">
        <InputGroup>
          <Button variant="light" onClick={handleSearch}>
            <FaSearch />
          </Button>
          <FormControl
            type="text"
            placeholder="Search doctor"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onBlur={handleBlur}
          />
        </InputGroup>
      </Form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* {showResults && doctors.length > 0 && ( */}
        {doctors.length > 0 && (
      <div className="search-results">
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Location</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((item, index) => (
              <tr key={index} onClick={() => handleDoctorSelection(item)}>
                <td>{item.doctorName}</td>
                <td>{item.locationName}</td>
                <td>{item.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )} 
    </div>
  );
};

export default DoctorSearch;
