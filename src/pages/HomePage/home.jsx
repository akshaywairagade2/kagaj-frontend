import react, { useEffect } from "react"

import { useNavigate } from 'react-router-dom';

import {
    Stack,
    Select,
    Image
} from '@chakra-ui/react'
import './home.css'

const Home = () => {

    return (
        <>
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={{
                textAlign: "center"
            }}>Our Team</h2>

            <div class="row" style={{ display: "flex" }}>
                <div class="column">
                    <div class="card">
                        <img src="https://bit.ly/dan-abramov" alt="John" width="100%"></img>
                        <div class="container">
                            <b>Sushant Yerawar</b>
                            <p class="title">CEO & Founder</p>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <b>sushant@gmail.com</b>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="https://bit.ly/dan-abramov" alt="John" width="100%"></img>
                        <div class="container">
                            <b>Akshay Wairagade</b>
                            <p class="title">CEO & Founder</p>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <b>akshay@gmail.com</b>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="https://bit.ly/dan-abramov" alt="John" width="100%"></img>
                        <div class="container">
                            <b>John Doe</b>
                            <p class="title">Designer</p>
                            <p style={{ paddingTop: "2%", paddingBottom: "2%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <b>john@example.com</b>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};


export default Home;