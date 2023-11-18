import java.util.Arrays;

public class array {
    public static void main(String[] args) {
        int [][]arr={
                {22,33,44,566,66},
                {44,66,777,777}
        };
        int []hello={5,6,7,8,6};
        System.out.println(Arrays.stream(arr).toArray());
        System.out.println(hello);
    }
}
