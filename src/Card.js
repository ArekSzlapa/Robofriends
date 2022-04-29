const Card = ({ name, username, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 grow bw2 shadow-5 tc">
      <img
        src={`https://robohash.org/${id}?200x200`}
        alt="one of the robofriends"
      />
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
