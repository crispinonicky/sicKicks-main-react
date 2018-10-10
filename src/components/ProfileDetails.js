import React, { Component } from 'react';
import axios from 'axios';

class ProfileDetails {
  constructor() {;
    let service = axios.create({
      baseURL: process.env.BASE_URL,
      withCredentials: true,
    });
    this.service = service;
  }


  signup = (username, password) => {
    return this.service.post('/signup', {username, password, firstName, lastName, email})
    .then(response => response.data)
  }


  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }


  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }


}

export default ProfileDetails;