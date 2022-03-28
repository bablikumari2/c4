import { Routes, Route } from "react-router-dom";
import { AddMeetup } from "../AddMeetup/AddMeetup";
import { Event } from "../Event/Event";
import { Home } from "../Home/Home";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { Navbar } from "../Navbar/Navbar";
import { NotFound } from "../NotFound/NotFound";

export const Routers = () => {
    return (<>
        <Navbar />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route exact path="/loginsignup" element = {<LoginSignUp/>} />
            <Route exact path="/addmeetup" element = {<AddMeetup/>} />

            <Route exact path="/events" element = {<Event />} />
            <Route path="*" element = {<NotFound/>} />
         <Route path="/meetup/:id" element={<AddMeetup/>} />
            {/* Create other routes here: loginsignup, meetup, addmeetup and 404 */}
            {/* meetup route should be dynamic */}
        </Routes>
    </>);
}
// / for home page
// /loginsignup for login and signup
// /meetup/:id for showing meetup details page with ID
// /addmeetup for adding/creating meetups
// * for 404 page. (using * as path will show 404 page automatically)
