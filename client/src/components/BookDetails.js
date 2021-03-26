import { useQuery } from '@apollo/client';
import React from 'react';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
	const { loading, error, data } = useQuery(getBookQuery, {
		variables: { id: bookId },
	});
	if (loading) {
		return <div>Loading...</div>;
	}
	//console.log(data);

	return (
		<div id="book-details">
			<p>Output book details here</p>
			<hr />
			{data.book && (
				<div>
					<h2>{data.book.name}</h2>
					<p>{data.book.genre}</p>
					<p>{data.book.author.name}</p>

					<p>All books by this author:</p>
					<ul className="other-books">
						{data.book.author.books.map((item) => (
							<li key={item.id}>{item.name}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default BookDetails;
