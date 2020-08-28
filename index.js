
import ReactDOM from "react-dom";
import './index.css';
import React, { Component } from 'react';



const fname="akshada";
const cd=new Date().toLocaleDateString();
const ct=new Date().toLocaleTimeString();

let curDate=new Date();
curDate=curDate.getHours();
let g='';

if(curDate>=1 && curDate<12)
{
	g='GOOD MORNING';
}else if (curDate>=12 && curDate<19)
{
	g='GOOD AFTERNOON';
}
else{
	g='GOOD NIGHT';
}



ReactDOM.render(
					<> 
					
					<h3 align="center">!!!!! WELCOME TO THE JOB LISTING PORTAL !!!!!</h3>
					<p align="center">FIND YOUR OPPORTUNITIES HERE</p>
					<img src="download.png" alt="Picture contains JOBS" />
			
				
					<h1 align="center">HELLO ENTHUSIATIC, {g}</h1>
					
					<button type="button" class="button button1" >HOME</button>
					 
					<button type="button" class="button button2">CREATE PROFILE</button>
					<button type="button" class="button button1">ADD JOBS</button>
					<button type="button" class="button button2">VIEW JOBS</button>
					<button type="button" class="button button1">GOVERNMENT JOBS</button>
					<button type="button" class="button button2">COMPANY DETAILS</button>
					<button type="button" class="button button1">CONTACT US JOBS LISTING</button>
					<button type="button" class="button button2">ABOUT US</button>
					<center>
					<h3> THIS IS MY HOME PAGE</h3>
					<h2>The Home page will contains information about jobs and its information</h2>
					</center>
	<center>		
      <form>
        <h3>CREATE PROFILE PAGE</h3>
        <p>Enter your name:</p>
        <input
          type="text"
        />
		<p>Enter your email:</p>
        <input
          type="text"
        />
		<p>Enter your Password:</p>
        <input
          type="text"
        />
		<p>Enter your Confirm_password:</p>
        <input
          type="text"
        />
		<p>Enter your Qualification:</p>
        <input
          type="text"
        />
		<p>Enter your Age:</p>
        <input
          type="text"
        />
		
		
      </form>
	  <button type="button" class="button button2">SUBMIT</button>
	  </center>
	  
	  
	  
	  
	  
	  
	  
	<h3>THIS IS ADD JOBS PAGE</h3>  
	  
	  <center>		
      <form>
        <h1>CREATE OR ADD JOBS</h1>
        <p>Enter your job title:</p>
        <input
          type="text"
        />
		<p>Enter your company name:</p>
        <input
          type="text"
        />
		<p>Enter your role:</p>
        <input
          type="text"
        />
		<p>Enter your salary:</p>
        <input
          type="text"
        />
		<p>Enter your Qualification:</p>
        <input
          type="text"
        />
		<p>Enter your experience:</p>
        <input
          type="text"
        />
		<p>Enter your total number of openings:</p>
        <input
          type="text"
        />
      </form>
	  <button type="button" class="button button2">SUBMIT</button>
	  </center>
  

<h3>VIEW JOBS</h3>
<center>
<h1> 1.Software Developer</h1>
<h2>Company: TCS</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:1 year</h2>
	<h2>Salary:6 LPA</h2>
	<h2>Openings:10</h2>
	<center><button type="button" class="button button1">Apply in TCS</button></center>
	
<h1> 2.Android Developer</h1>
<h2>Company: FinIQ</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:2 year</h2>
	<h2>Salary:4 LPA</h2>
	<h2>Openings:20</h2>
	<center><button type="button" class="button button2">Apply in FinIQ</button></center>
	
<h1> 3.Software Developer</h1>
<h2>Company: Persistant</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:1 year</h2>
	<h2>Salary:5 LPA</h2>
	<h2>Openings:20</h2>
	<center><button type="button" class="button button1">Apply in Persistant</button></center>
	
<h1> 4.Software Developer</h1>
<h2>Company: Infosys</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:2 year</h2>
	<h2>Salary:6 LPA</h2>
	<h2>Openings:50</h2>
<center><button type="button" class="button button2">Apply in Infosys</button></center>

<h1> 5.Software Developer</h1>
<h2>Company: Vesatogo</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:1 year</h2>
	<h2>Salary:6 LPA</h2>
	<h2>Openings:50</h2>
<center><button type="button" class="button button1">Apply in Vesatogo</button></center>
	
<h1> 6.Software Developer</h1>
<h2>Company: TCS</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:1 year</h2>
	<h2>Salary:6 LPA</h2>
	<h2>Openings:10</h2>
<center><button type="button" class="button button2">Apply in TCS</button></center>	

<h1> 7.Software Developer</h1>
<h2>Company: TCS</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:1 year</h2>
	<h2>Salary:6 LPA</h2>
	<h2>Openings:10</h2>
<center><button type="button" class="button button1">Apply in TCS</button></center>

	
<h1> 8.Software Developer</h1>
<h2>Company: TCS</h2>
	<h2>Role:Developer</h2>
	<h2>Experience:1 year</h2>
	<h2>Salary:6 LPA</h2>
	<h2>Openings:10</h2>
<center><button type="button" class="button button2">Apply in TCS</button></center>					
</center>
</>,
document.getElementById("root"));


