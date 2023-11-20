public class string {
    public static void main(String[] args) {
        String str1="Hello ";
        String str2=new String("world");
        String str3=str1+str2;

        System.out.println(str3.toLowerCase());
        System.out.println(str3.toUpperCase());
//        System.out.println(str1.equals(str1));
        System.out.println(str3.charAt(1));

        StringBuffer buffer=new StringBuffer();
        System.out.println(buffer.capacity());
    }
}
