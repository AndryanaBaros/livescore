import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <Container>
            <input type="checkbox" id="side" name="" value="" />
            <div className="page-wrap">
                <div className="page-content">
                    <label for="side" className="toggle">
                        ☰
                    </label>
                </div>
                <p>Matches</p>
                <div className="sidebar">
                    <ul>
                        <li>Matches</li>
                        <li>Team</li>
                        <li>Calender</li>
                        <li>Account</li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}

export default Navbar;

const Container = styled.div`
    margin-bottom: -25px;
    .page-wrap {
        overflow-x: hidden;
        line-height: 26px;
        p {
            font-size: 20px;
            font-weight: 700;
            margin-top: -35px;
            font-weight: 700;
            color: white;
            margin-bottom: 30px;
        }
    }

    .page-content {
        display: flex;
        position: relative;
        z-index: 0;
        padding: 10px 15px;
        -webkit-transition: 0.6s;
        -moz-transition: 0.6s;
        transition: 0.6s;

        label {
            color: white;
        }
    }

    .toggle {
        -webkit-transition: 0.5s;
        -moz-transition: 0.5s;
        transition: 0.5s;
        text-decoration: none;
        font-size: 35px;
        color: black;
        z-index: 1;
    }
    .toggle:hover {
        color: white;
    }

    .sidebar {
        position: fixed;
        top: 0px;
        right: 0;
        bottom: 0px;
        left: -260px;
        -webkit-transition: 0.6s;
        -moz-transition: 0.6s;
        transition: 0.6s;
        width: 200px;
        padding: 10px 40px 10px 10px;
        background-color: black;
        z-index: 0;
    }
    .sidebar li {
        color: white;
        font-family: "Arial", sans-serif;
        font-size: 1px;
        margin-bottom: 16px;
        -webkit-font-smoothing: antialiased;
        -webkit-transition: 1s;
        -moz-transition: 1s;
        transition: 1s;
        list-style: none;
    }
    .sidebar li:hover {
        color: white;
    }

    #side {
        display: none;
    }
    #side:checked + .page-wrap .sidebar {
        transform: translateX(260px);
    }
    #side:checked + .page-wrap .sidebar li {
        font-size: 16px;
    }
    #side:checked + .page-wrap .page-content {
        transform: translateX(260px);
    }
`;
