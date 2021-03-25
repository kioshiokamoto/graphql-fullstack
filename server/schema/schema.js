import graphql from 'graphql';
import _ from 'lodash'
const { GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

//Informacion temporal
var books = [
    {name:'Name of the wind', genre:'Fantasy', id:'1'},
    {name:'The final empire', genre:'Fantasy', id:'2'},
    {name:'The long earth', genre:'Sci-fy', id:'3'},
]

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLString } },
            resolve(parent,args){
                //Code to get data from db / other source
                return _.find(books,{id:args.id});
            }
		},
	},
});

//Export.modules
export default new GraphQLSchema({
    query:RootQuery
})

