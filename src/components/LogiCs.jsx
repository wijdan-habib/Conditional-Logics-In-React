import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LogiCs() {
  const [stage, setStage] = useState('home');
  const [action, setAction] = useState('');

  const handleSelectRoom = (room) => {
    setStage(room);
  };

  const handleSelectAction = (action) => {
    setAction(action);
    setStage('actionPerforming');
  };

  const handleGoBack = (selection, sec) => {
    setAction(selection);
    setStage(sec);
  };

  return (
    <div className="container mt-5">
      {stage === 'home' && (
        <div className="text-center">
          <h1>Welcome to my home</h1>
          <h3>Select</h3>
          <button className="btn btn-primary mt-3" onClick={() => handleSelectRoom('room1')}>
            ROOM 1
          </button>
        </div>
      )}
      {stage === 'room1' && (
        <div className="text-center">
          <h1>Welcome to Room 1</h1>
          <h3>What would you like to do here:</h3>
          <button
            className="btn btn-primary mt-3"
            onClick={() => handleSelectAction('reading')}
          >
            Read Books
          </button>
          <button
            className="btn btn-primary mt-3 ml-3"
            onClick={() => handleSelectAction('watching')}
          >
            Watch TV
          </button>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleGoBack('', 'home')}
          >
            Go back to home
          </button>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleSelectRoom('room2')}
          >
            Go to room 2
          </button>
        </div>
      )}
      {stage === 'room2' && (
        <div className="text-center">
          <h1>Welcome to Room 2</h1>
          <h3>What would you like to do here:</h3>
          <button
            className="btn btn-primary mt-3"
            onClick={() => handleSelectAction('clothes')}
          >
            Fold Your Clothes
          </button>
          <button
            className="btn btn-primary mt-3 ml-3"
            onClick={() => handleSelectAction('playing')}
          >
            Play Guitar
          </button>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleGoBack('', 'room1')}
          >
            Go back to room 1
          </button>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleSelectRoom('room3')}
          >
            Go to room 3
          </button>
        </div>
      )}
      {stage === 'room3' && (
        <div className="text-center ">
          <h1>Welcome to Room 3</h1>
          <h3>What would you like to do here:</h3>
          <button
            className="btn btn-primary mt-3"
            onClick={() => handleSelectAction('breakfast')}
          >
            Breakfast
          </button>
          <button
            className="btn btn-primary mt-3 ml-3"
            onClick={() => handleSelectAction('lunch')}
          >
            Lunch
          </button>
          <button
            className="btn btn-primary mt-3 ml-3"
            onClick={() => handleSelectAction('dinner')}
          >
            Dinner
          </button>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleGoBack('', 'room2')}
          >
            Go back to room 2
          </button>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleGoBack('', 'garden')}
          >
            Go to garden
          </button>
        </div>
      )}
      {stage === 'garden' && (
        <div className="text-center">
          <h1>Welcome to the garden</h1>
          <button
            className="btn btn-danger mt-3 ml-3"
            onClick={() => handleGoBack('', 'room3')}
          >
            Go back to room 3
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'reading' && (
        <div className="text-center">
          <h2>You're reading a book</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room1')}>
            Go back to room 1
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'watching' && (
        <div className="text-center">
          <h2>You're watching TV</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room1')}>
            Go back to room 1
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'clothes' && (
        <div className="text-center">
          <h2>You're folding clothes</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room2')}>
            Go back to room 2
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'playing' && (
        <div className="text-center">
          <h2>You're playing guitar</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room2')}>
            Go back to room 2
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'breakfast' && (
        <div className="text-center">
          <h2>You're having breakfast</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room3')}>
            Go back to room 3
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'lunch' && (
        <div className="text-center">
          <h2>You're having lunch</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room3')}>
            Go back to room 3
          </button>
        </div>
      )}
      {stage === 'actionPerforming' && action === 'dinner' && (
        <div className="text-center">
          <h2>You're having dinner</h2>
          <button className="btn btn-danger mt-3" onClick={() => handleGoBack('', 'room3')}>
            Go back to room 3
          </button>
        </div>
      )}
    </div>
  );
}
