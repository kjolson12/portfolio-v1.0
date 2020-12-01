import covid from '../../images/project-screens/covid-ss.png';
import jamming from '../../images/project-screens/jamming-ss.png';
import pokemon from '../../images/project-screens/pokemon-ss.png';
import ravenous from '../../images/project-screens/ravenous-ss.png';
import teacozy from '../../images/project-screens/teacozy-ss.png';
import videos from '../../images/project-screens/videos-ss.png';
import stocks from '../../images/project-screens/nest_egg-ss.png';


export const data = [
    {
        title: 'Nest Egg',
        description: `A clone of the popular investing app Robinhood which 
        allows the user to search for stocks and view various charts, stats, 
        and news stories.`,
        skills: 'React, Redux, Semantic UI, Axios',
        screenshot: stocks

    },
    {
        title: 'COVID-19 Tracker',
        description: `A tracker that logs the number of infected,
        recovered, and deaths globally or by country.`,
        skills: 'React, CSS, Axios',
        screenshot: covid
    },
    {
        title: 'Jamming',
        description: `A playlist creator that uses Spotify's API allowing
        the user to add the playlist directly to their Spotify account.`,
        skills: 'React, CSS',
        screenshot: jamming
    },
    {
        title: 'Pokedex',
        description: `A simple app that utilizes a Pokemon API to show pages
        of pokemon, thier types, and moves.`,
        skills: 'React, CSS',
        screenshot: pokemon
    },
    {
        title: 'Ravenous',
        description: `A clone of the popular app 'Yelp' which a user can search
        for food in their area and sort by rating, number of reviews, or best match`,
        skills: 'React, CSS',
        screenshot: ravenous
    },
    {
        title: 'Tea Cozy',
        description: `A non interactive web page for a fictional tea shop designed with
        Flexbox.`,
        skills: 'HTML, CSS',
        screenshot: teacozy
    },
    {
        title: 'Video Player',
        description: `A clone of the basic functionality of the website 'Youtube' where
        the user can search for videos on Youtube's API.`,
        skills: 'React, Semantic UI, CSS, Axios',
        screenshot: videos
    }
]