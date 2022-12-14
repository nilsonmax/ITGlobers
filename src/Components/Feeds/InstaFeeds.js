import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import axios from 'axios'

import Feed from './Feed'

import '../../SCSS/Instagram.scss'
import { fetchInstagramPost } from '../../redux/action';

const InstaFeeds = ({token, ...props}) => {
    const feeds = useSelector(state => state.feeds)
    const dispatch = useDispatch();
    // const [feeds, setFeedsData] = useState([]);
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        const abortController = new AbortController();

         dispatch(fetchInstagramPost(props.limit,tokenProp.current))
        // async function fetchInstagramPost () {
        //   try{
        //     axios
        //         .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`)
        //         .then((resp) => {
        //             setFeedsData(resp.data.data)
        //         })
        //   } catch (err) {
        //       console.log('error', err)
        //   }
        // }

        // fetchInstagramPost();


        return () => {
            abortController.abort();
        };
    }, [dispatch, props.limit])

    return (
        <div className="containerInstagram">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default InstaFeeds;