import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;

const AddBook = () => {
	const { loading, error, data } = useQuery(getAuthorsQuery);
    //  console.log(data?.authors)
    const displayAuthors = ()=>{
        if(loading){
            return(
                <option disabled>Loading Authors...</option>
            )
        }else{
            return data.authors.map(author =>(
                <option key={author.id} value={author.id}>{author.name}</option>
            ))
        }
    }
	return (
		<form id="add-book">
			<div className="field">
				<label>Book name:</label>
				<input type="text" />
			</div>
			<div className="field">
				<label>Genre:</label>
				<input type="text" />
			</div>
			<div className="field">
				<label>Author:</label>
				<select>
					<option>Select author</option>
					{displayAuthors()}
				</select>
			</div>
			<button>+</button>
		</form>
	);
};

export default AddBook;
