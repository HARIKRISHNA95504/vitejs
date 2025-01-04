import { useState,useEffect, Fragment } from "react";
function Meetings(){
    const [meetings,setMeetings] = useState()
    useEffect(()=>{
        getMeetings()
    },[])
    const getMeetings= async ()=>{
        const response = await fetch('http://localhost:4000/meetings')
        const data = await response.json()
        setMeetings(data)
        console.log(data)
    }
    return(
    <>
    <div className="text-center text-2xl text-yellow-600 underline font-bold">Meetings List</div>
        <div>
            {meetings&& meetings.length>0?(
                <div className="grid gap-2 grid-cols-4 m-5 justify-start">
                    <Fragment>
                    {meetings.map(meeting=>(
                        <div className="max-w-sm rounded shadow-lg bg-white px-6 pt-5 pl-4 pb-3" key={meeting.meeting_id}>
                            <h2 className="text-2xl font-semibold text-gray-800" style={{color:"green",}}>{meeting.title}</h2>
                            <p className="text-gray-500 mt-2">Date: <span className="font-semibold">{meeting.date}</span></p>
                            <p className="text-gray-500">Time: <span className="font-semibold">{meeting.time}</span></p>
                            <p className="text-gray-500">Location: <span className="font-semibold">{meeting.location}</span></p>
            
                            <div className="mt-4" key={meeting.meeting_id}>
                                <h3 className="text-lg font-medium text-gray-700">Participants:</h3>
                                <ul className="list-disc pl-5 mt-2">
                                {meeting.participants.map(participant=>(
                                    <li className="text-gray-600">{participant}</li>
                                ))}
                                </ul>
                            </div>
        
                            <div className="mt-6 text-center">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Join Meeting</button>
                                <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-400">Delete</button>
                            </div>
                        </div>
                    ))}
                </Fragment>
                </div>
            ):(
                <div>no colums</div>
            )}
        </div>
    </>
    )
}
export default Meetings;