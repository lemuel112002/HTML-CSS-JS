// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

function ProfilePicture() {

    const imageUrl = '/src/assets/danrei_bd_pic.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
    );
}

export default ProfilePicture;