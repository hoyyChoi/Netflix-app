import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';

const MovieTrailer = (props) => {

    const opts = {
        height: '500',
        width: '760',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

     
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{color:"black"}}>
          movie-trailer{/* {props.video.results&&props.video.results[0].name} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <YouTube videoId={props.video.results&&props.video.results[4].key} opts={opts} />
    
      </Modal.Body>
    </Modal>
  )
}

export default MovieTrailer