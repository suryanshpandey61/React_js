import style from "./profile.module.css"
import img from "./Real_betis_logo.png"
const Profile = () => {
    return (
        <div id={style.card}>
            <img src={img} alt="" />
        </div>
    )
}
export default Profile