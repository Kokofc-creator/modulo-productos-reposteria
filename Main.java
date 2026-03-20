import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Main {
    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/tablasreposteria",
                "root",
                "0987"
            );

            String sql = "DELETE FROM producto WHERE Nombre = ?";
            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, "Cupcake Fresa");

            int filas = ps.executeUpdate();

            System.out.println("Productos eliminados: " + filas);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}