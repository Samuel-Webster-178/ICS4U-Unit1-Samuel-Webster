/*
* This program calculates the energy released when mass is converted to energy.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import java.util.Random;
import java.util.Scanner;

/**
* This lets user guess random number.
*/
final class NumberGuessing {

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private NumberGuessing() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(String[] args) {
        // constants & variables
        final Scanner scanner = new Scanner(System.in);
        final Random random = new Random();
        final int dicerole = random.nextInt(6) + 1;
        final int randomNumberMax = 6;
        final String invalidInputString = "invalid input\n";
        int guesses = 0;
        int inputInt = 0;

        while (true) {
            // input and error check
            boolean validInput = false;
            try {
                System.out.print("Guess the dicerole: ");
                final String inputString = scanner.nextLine().trim();
                if (inputString.isEmpty()) {
                    System.out.println(invalidInputString);
                } else {
                    inputInt = Integer.parseInt(inputString);
                    if (inputInt < 1 || inputInt > randomNumberMax) {
                        System.out.println(invalidInputString);
                    } else {
                        validInput = true;
                    }
                }
            } catch (NumberFormatException ex) {
                System.out.println(invalidInputString);
            }
            // process
            if (validInput) {
                guesses += 1;
                if (inputInt > dicerole) {
                    System.out.println("Too high\n");
                } else if (inputInt < dicerole) {
                    System.out.println("Too low\n");
                } else {
                    // output
                    System.out.println(
                        `You successfully guessed the number ${dicerole+1} in ${guesses} tries`
                    );
                    break;
                }
            }
        }
        System.out.println("\nDone.");
    }
}