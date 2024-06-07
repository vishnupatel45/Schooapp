import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import './profile.css';

export function Stprofile() {
    const [profiles, setProfile] = useState([]);

    const fetchProfile = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:7000/studentprofile/10/B/31`);
            setProfile(res.data);
        } catch (error) {
            console.error("Error fetching profile", error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const memoizedProfiles = useMemo(() => profiles, [profiles]);

    return (
        <div>
            <div className="profile-header-section">
                {memoizedProfiles.map(profile => (
                    <div key={profile.RollNumber} className="profile-section">
                        <div className="profile-info">
                            <img src="/images/admission-icon.png" alt="Profile" className="profile-pic"/>
                            <div className="profile-name">
                                <b>{profile.Name}</b>
                                <p>Class: {profile.Class} - {profile.Section} | Roll No: {profile.RollNumber}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
