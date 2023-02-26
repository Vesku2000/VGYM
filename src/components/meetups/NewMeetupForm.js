import { useRef, useState, useEffect } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const motivationInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();

  const [selectedImage, setSelectedImage] = useState('chestImg');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredMotivation, setEnteredMotivation] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  useEffect(() => {
    const storedTitle = sessionStorage.getItem('title');
    const storedMotivation = sessionStorage.getItem('motivation');
    const storedDescription = sessionStorage.getItem('description');

    if (storedTitle) {
      setEnteredTitle(storedTitle);
    }

    if (storedMotivation) {
      setEnteredMotivation(storedMotivation);
    }

    if (storedDescription) {
      setEnteredDescription(storedDescription);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('title', enteredTitle);
    sessionStorage.setItem('motivation', enteredMotivation);
    sessionStorage.setItem('description', enteredDescription);
  }, [enteredTitle, enteredMotivation, enteredDescription]);

  function submitHandler(event) {
    event.preventDefault();

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // getMonth returns 0-based index, so add 1 to get the actual month number
    const year = currentDate.getFullYear();
    const enteredDate = `${day}.${month}.${year}`;

    const meetupData = {
      title: enteredTitle,
      image: selectedImage,
      motivation: enteredMotivation,
      description: enteredDescription,
      date: enteredDate,
    };

    props.onAddMeetup(meetupData);
  }

  function handleImageChange(event) {
    setSelectedImage(event.target.value);
  }

  function handleTitleChange(event) {
    setEnteredTitle(event.target.value);
  }

  function handleMotivationChange(event) {
    setEnteredMotivation(event.target.value);
  }

  function handleDescriptionChange(event) {
    setEnteredDescription(event.target.value);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Exercise Title</label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Exercise Image</label>
          <select value={selectedImage} onChange={handleImageChange}>
            <option value='https://www.bodybuilding.com/images/2017/october/the-13-best-chest-exercises-for-men-header-v2-EVL-830x467.jpg'>Chest Image</option>
            <option value='https://www.muscleandfitness.com/wp-content/uploads/2019/12/1109-Man-Posing-Biceps-shutterstock_553440583.jpg?quality=86&strip=all'>Arm Image</option>
            <option value='https://cdn.pixabay.com/photo/2021/01/04/06/21/man-5886580_960_720.jpg'>Leg Image</option>
            <option value='https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg'>Back Image</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Fiilis</label>
          <input type='text' 
          required id='address' 
          ref={motivationInputRef}
          value={enteredMotivation}
          onChange={handleMotivationChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Liikkeet</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            value={enteredDescription}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Tallenna harjoitus</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
