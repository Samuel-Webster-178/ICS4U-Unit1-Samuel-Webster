/*
* This program calculates the energy released when mass is converted to energy.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import java.util.Scanner;

/**
* This calculates energy released.
*/
final class EnergyReleased {

    /**
    * Prevent instantiation.
    * Throw an exception IllegalStateException.
    * if this is ever called
    *
    * @throws IllegalStateException if this is ever called
    *
    */
    private EnergyReleased() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        // input
        final Scanner scanner = new Scanner(System.in);

        final double speedOfLight = 2.99e8;
        float objectMass = 0.0f;

        // check input & process
        try {
            System.out.print("Enter the mass of your object (kg): ");
            final String objectMassString = scanner.nextLine().trim();
            if (objectMassString.isEmpty()) {
                System.out.println("invalid input");
            } else {
                objectMass = Float.parseFloat(objectMassString);
                final double energyReleased =
                    objectMass * Math.pow(speedOfLight, 2);
                System.out.print(objectMass + " kg of mass would produce ");
                System.out.print(String.format("%.3e", energyReleased));
                System.out.println(" J of energy");
            }
        } catch (NumberFormatException ex) {
            System.out.println("invalid input!");
        }

        scanner.close();

        System.out.println("\nDone.");
    }
}
