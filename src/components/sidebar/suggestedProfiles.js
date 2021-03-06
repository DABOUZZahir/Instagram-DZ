import Proptypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { updateLoggedInUserFollowing, updateFollowerUserFollowers} from '../../services/firebase'

export default function SuggestedProfiles({ 
    profileDocId, 
    username, 
    profileId, 
    userId, 
    loggedInUserDocId 
}) {
    const [followed, setFollowed] = useState(false);

    async function handleFollowUser(){
        setFollowed(true);

        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
        await updateFollowerUserFollowers(profileDocId, userId, false)
    }

    return(
        !followed?(
            <div className="flex flex-row items-center align-items justify-between">
                <div className="flex items-center justify-between">
                    <img 
                        className="rounded-full w-8 flex mr-3"
                        src={`/images/avatars/${username}.jpg`}
                        alt={username}
                    />
                    <Link to={`/p/${username}`}>
                        <p className="font-bold text-sm">{username}</p>
                    </Link>
                </div>
                <div>
                    <button className="text-xs font-bold text-blue-medium"
                    type ="button" onClick={handleFollowUser}>Follow</button>
                </div>
            </div>
        ) : null
    )
}

SuggestedProfiles.propTypes = {
    profileDocId: Proptypes.string.isRequired,
    username: Proptypes.string.isRequired,
    profileId: Proptypes.string.isRequired,
    userId: Proptypes.string.isRequired,
    loggedInUserDocId: Proptypes.string.isRequired,
}