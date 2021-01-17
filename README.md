# Gerechten API
Een api gebaseerd op gerechten, de ingredienten en keukens ervan.

## Getting Started
When opening the project, run the project with node with this command in the terminal
```
npm run start
```
You should be able to see the project up and running on localhost port 3001. 
To see all the entries just head over to "/gerechten"


### Prerequisites
Install the required packages before running the project. To install jest, simply use this command
```
npm i jest
```

### Connecting to docker & adding/modifying entries to the API

To connect to docker use this command in the terminal
```
docker-compose up
```
To add entries, modify the post function in index.js, then head over to a third-party program like Postman to send the request.


## Running the tests

Run the tests by using the command
```
npm run test
```
### Break down into end to end tests

The tests check how many characters the strings contain.
## Contributing

Please read [CONTRIBUTING.md](https://github.com/fadyelabed/Dev5_ElabedFady/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Fady Elabed**

## License

This project is licensed under the GNU General Public License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank u to Jan Everaert for guiding me through this project.