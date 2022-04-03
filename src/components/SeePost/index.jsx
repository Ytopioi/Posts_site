import React, { useState } from "react";
import { Breadcrumbs, Link, Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, Grid} from '@mui/material';
import { Favorite, MoreVert, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import dayjs from "dayjs";
import 'dayjs/locale/ru';

import cn from "classnames";
import s from './styles.module.css';
import { Button } from '@mui/material';

dayjs.locale('ru')

export const SeePost = ({currentUser, onPostLike, _id, likes, image, title, text, created_at, author, tags }) => {

   //  const [expanded, setExpanded] = useState(false);
   //  const handleExpandClick = () => {
   //    setExpanded(!expanded);
   //  };
    const isLiked = likes && likes.some((id) => id === currentUser._id);

    const dataFormated = dayjs(created_at).format('dddd, MMMM DD YYYY');
	 
    const handleLikeClick = () => {
        onPostLike({_id, likes})
    };

  return (
	<>
		<div >
			<h1 className={s.title_post}>{title}</h1>
		</div>

		<div className={s.author_post}>
			<div style={{display: "flex", alignItems: "center"}}>
				<Avatar src={author?.avatar && author?.avatar} aria-label="recipe">
					{!author?.avatar && author?.name.slice(0,1)}
				</Avatar>
				<Typography style={{color: "rgb(97, 11, 97)", paddingLeft: "20px" }}>
					{author?.name}
				</Typography>
			</div>
			<div >
				<Typography style={{color: "rgb(97, 11, 97)"} }>
					{author?.email}
				</Typography>
				<Typography style={{color: "rgb(97, 11, 97)"} }>
					{dataFormated}
				</Typography>
			</div>
		</div>

		<div className={s.text_post}>
			<img src={image} alt={`Изображение поста ${author?.name}`} />
			<Typography style={{color: "rgb(97, 11, 97)"} }>
				{text}
			</Typography>
		</div>

		<div className={s.end_post}>
			<div style={{display: 'flex', alignItems: "center"}}>
				<IconButton aria-label="add to favorites" onClick={handleLikeClick}>
					{isLiked ? <Favorite sx={{fill: "red"}}/> : <Favorite/>}
				</IconButton>
				<p>{likes?.length}</p>
			</div>

			<div className={s.tags_post}>
				{tags?.map((...tag) => {
					for(let val of tag) {
						if(typeof val === 'string') {
							return <a key={val} href="#" className={s.tag_link}>#{val}</a>
						}
					}
					})
				}
			</div>
		</div>
	</>

  );
};

