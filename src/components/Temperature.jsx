function Temperature({ temperature }) {
  let message;

  if (temperature >= 90) {
    message = "It is hot!";
  } else if (temperature >= 70) {
    message = "It is warm.";
  } else {
    message = "It is cool.";
  }

  return (
    <div>
      <p>The temperature is {temperature} degrees Fahrenheit.</p>
      <p>{message}</p>
    </div>
  );
}

export default Temperature;
