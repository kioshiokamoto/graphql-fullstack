import React from 'react';
import { gql, useQuery } from '@apollo/client';

const getBooksQuery = gql`
	{
		books{
			name
			id
		}
	}
`;

const BookList = () => {
	const { loading, error, data } = useQuery(getBooksQuery);
	//console.log(data)
	if(loading) return <div>Loading Books</div>
	if(error) return <div>An error has occurred</div>
	return (
		<div>

			<ul id="book-list">
				{data.books.map(book => (
					<li key={book.id}>{book.name}</li>
				))}
				
			</ul>
		</div>
	);
};

export default BookList;
