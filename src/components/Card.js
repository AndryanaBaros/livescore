import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

function Card() {
    const [matches, setMatch] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://client.elevenscore.com/api/football/match/matchfixtures",
                {
                    headers: {
                        "X-Api-Key": " 24578cdb-fc01-4794-9bb0-865dd8ac405c ",
                    },
                    params: {
                        _limit: 20,
                        date: 20210613,
                        utc: 7,
                    },
                }
            )
            .then((res) => {
                setMatch(res.data.result.slice(1, 10));
                console.log(res.data.result.slice(1, 10));
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {matches.map((match) => (
                <Container>
                    <div className="date">
                        <span>{match.matchTime}</span>
                        <p>{match.eventShortName}</p>
                    </div>
                    <TeamWrap>
                        <div>
                            <img src={match.homeTeamEvent.logoUrl} alt="" />
                            <p>{match.homeTeamEvent.name.slice(0, 8)}</p>
                        </div>
                        <div className="score">
                            <label>
                                {match.homeTeamEvent.score} -{" "}
                                {match.awayTeamEvent.score}
                            </label>
                            <span>FINAL</span>
                        </div>
                        <div>
                            <img src={match.awayTeamEvent.logoUrl} alt="" />
                            <p>{match.awayTeamEvent.name.slice(0, 7)}</p>
                        </div>
                    </TeamWrap>
                    <BorderLine />
                    <Statistic>
                        <div>
                            <EqualizerOutlinedIcon />
                            <span>Statistics</span>
                        </div>
                        <ArrowForwardIosOutlinedIcon
                            color="disabled"
                            fontSize="small"
                        />
                    </Statistic>
                </Container>
            ))}
        </div>
    );
}

export default Card;

const Container = styled.div`
    height: 220px;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 5px;
    background-color: white;
    .date {
        margin-top: 12px;
        span {
            font-size: 14px;
            color: #f1751f;
            font-weight: 700;
            margin-top: 20px;
            /* position: relative; */
        }
        p {
            margin-top: 0;
            font-size: 12px;
            color: gray;
            font-weight: 600;
        }
    }

    @media (min-width: 40rem) {
        .cards_item {
            width: 50%;
        }
    }

    @media (min-width: 56rem) {
        .cards_item {
            width: 33.3333%;
        }
    }
`;

const TeamWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;

    img {
        height: 70px;
        width: 70px;
        vertical-align: middle;
        margin-left: 0;
        background-color: bisque;
    }

    p {
        font-size: 16px;
        font-weight: 700;
        color: gray;
        overflow: hidden;
    }

    .score {
        font-size: 20px;
        font-weight: 700;
        label {
            font-size: 50px;
            display: flex;
            justify-content: center;
            margin-left: 0px;
            margin-bottom: 10px;
        }
    }
`;

const BorderLine = styled.div`
    margin-top: 0px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(242, 241, 239, 1);
`;

const Statistic = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        font-size: 14px;
        font-weight: 600;
        color: #f1751f;
        margin-left: 5px;
        /* position: absolute; */
        margin-top: 5px;
    }
`;
