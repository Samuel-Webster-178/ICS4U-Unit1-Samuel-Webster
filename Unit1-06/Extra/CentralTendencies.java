/*
* This program calculates the energy released when mass is converted to energy.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-03-25
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* This is the statistics program.
*/
final class Statistics {

    /**
    * Prevent instantiation
    * Throw an exception IllegalStateException.
    * if this ever is called
    *
    * @throws IllegalStateException
    *
    */
    private Statistics() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
    * The mean() function.
    *
    * @param arrayOfIntegers the collection of integers
    * @return the mean of the integers
    */
    public static double mean(final Float[] arrayOfIntegers) {
        double mean = 0;
        float sum = 0;
        for (int counter1 = 0; counter1 < arrayOfIntegers.length; counter1++) {
            sum += arrayOfIntegers[counter1];
        }
        mean = sum / arrayOfIntegers.length;
        return mean;
    }

    /**
    * The median() function.
    *
    * @param arrayOfIntegers the collection of integers
    * @return the median of the integers
    */
    public static double median(final Float[] arrayOfIntegers) {
        double median = 0;
        Float[] sortedArray = arrayOfIntegers;
        Arrays.sort(sortedArray);
        if (sortedArray.length % 2 != 0) {
            median = Math.floor(sortedArray.length / 2);
        } else {
            median = (
                sortedArray[sortedArray.length / 2] +
                sortedArray[sortedArray.length / 2 - 1]
            ) / 2;
        }
        return median;
    }

    /**
    * The starting main() function.
    *
    * @param args No args will be used
    */
    public static void main(final String[] args) {
        Float tempNumber;
        final ArrayList<Float> listOfNumbers = new ArrayList<Float>();
        final Path filePath = Paths.get("../", args[0]);
        final Charset charset = Charset.forName("UTF-8");

        try (BufferedReader reader = Files.newBufferedReader(
                                     filePath, charset)) {
            String line = null;
            while ((line = reader.readLine()) != null) {
                tempNumber = Float.parseFloat(line);
                listOfNumbers.add(tempNumber);
            }
        } catch (IOException errorCode) {
            System.err.println(errorCode);
        }

        final Float[] arrayOfNumbers = listOfNumbers.toArray(new Float[0]);
        System.out.println(Arrays.toString(arrayOfNumbers));

        System.out.println("\nCalculating stats...");
        final double mean = mean(arrayOfNumbers);
        final double median = median(arrayOfNumbers);

        System.out.println("The mean is: " + mean);
        System.out.println("The median is: " + median);

        System.out.println("\nDone.");
    }
}
