export class Rover {

    constructor(location, direction) {
        this.location = location;
        this.direction = direction;
    }

    getLocation() {
        return this.location;
    }
    getDirection() {
        return this.direction;
    }

    turnLeft() {
        const directions = ['N', 'E', 'S', 'W'];
        const index = directions.indexOf(this.direction);
        this.direction = index >= 1 ? directions[index - 1] : directions[directions.length - 1];
    }
}