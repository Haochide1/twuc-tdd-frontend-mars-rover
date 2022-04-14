
import {Rover} from "../src/rover";

describe("mars rover", () => {
        test("should return current location and direction", () => {
            // Given
            const location = { x:1, y:1 };
            const direction = "N";
            const rover = new Rover(location, direction);
            // When
            const currLoc = rover.getLocation();
            const currDirection = rover.getDirection();

            // Then
            expect(currLoc).toBe(location);
            expect(currDirection).toBe(direction);
        })
    test.each([{direction:'N',expected:'W'},
        {direction:'S',expected:'E'},
        {direction:'W',expected:'S'},
        {direction:'E',expected:'N'}])('should face $expected when turn left from $direction',({direction,expected})=>{
        // Given
        const rover = new Rover({x: 0, y: 0}, direction);
        // When
        rover.turnLeft();
        // Then
        expect(rover.getDirection()).toEqual(expected);
    })
    }
)