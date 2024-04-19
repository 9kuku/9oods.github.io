import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerApplication = () => {
  const [brandName, setBrandName] = useState('');
  const [domainName, setDomainName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSellerApplicationSubmit = async (event) => {
    event.preventDefault();

    const sellerData = {
      brandName,
      domainName,
      introduce,
      email,
      phoneNumber,
    };

    try {
      const response = await axios.post('/api/v1/users/seller-application', sellerData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
        },
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      if (error.response) {
        // 서버에서 ApiException을 통해 에러 메시지를 전달한 경우
        console.error(`Error! HTTP Status: ${error.response.status}, Message: ${error.response.data.message}`);
      } else if (error.request) {
        // 요청이 서버에 도달했지만, 응답을 받지 못한 경우
        console.error('No response was received', error.request);
      } else {
        // 요청을 생성하는 중에 에러가 발생한 경우
        console.error('Error', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSellerApplicationSubmit}>
      <label>
        Brand Name:
        <input type="text" value={brandName} onChange={e => setBrandName(e.target.value)} />
      </label>
      <label>
        Domain Name:
        <textarea value={domainName} onChange={e => setDomainName(e.target.value)} />
      </label>
      <label>
        Introduce:
        <input type="number" value={introduce} onChange={e => setIntroduce(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="number" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        PhoneNumber:
        <input type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SellerApplication;