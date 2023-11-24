package com.dh.pi2.mcproductos.controller;
import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.dto.RequestProductosDto;
import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.service.CrudService;
import com.dh.pi2.mcproductos.service.ProductosServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api-productos/productos")
public class ProductosController extends BaseController<ProductosDto>{

    @Autowired
    private ProductosServiceImpl productoService;

    public ProductosController(CrudService<ProductosDto> crudService) {
        super(crudService);
    }

    @GetMapping
    public ResponseEntity<List<ProductosDto>> obtenerProductosPorFiltro(
            @RequestParam(name = "nombre", required = false) String nombre,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")  LocalDateTime fechaPublicacion,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime fechaFinalizacion,
            @RequestParam(required = false) Double monto,
            @RequestParam(required = false) String categoriasIdNombre,
            @RequestParam(required = false) Integer usuariosId,
            @RequestParam int pageNumber,
            @RequestParam int pageSize
    ) {
        Categorias categoriaNombre = Categorias.builder()
                .nombre(categoriasIdNombre)
                .build();
        RequestProductosDto filtro = RequestProductosDto.builder()
                .nombre(nombre)
                .fechaPublicacion(fechaPublicacion)
                .fechaFinalizacion(fechaFinalizacion)
                .categoriasId(categoriaNombre)
                .usuariosId(usuariosId)
                .build();
        if (monto != null){
            filtro.setMonto(monto);
        }
        if (usuariosId != null){
            filtro.setUsuariosId(usuariosId);
        }
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        Page<ProductosDto> productos = productoService.listPRoductsByFilterRequestProductosDto(filtro, pageable);
        List<ProductosDto> productosList = productos.getContent();
        long totalElements = productos.getTotalElements();
        int totalPages = productos.getTotalPages();
        return ResponseEntity.ok(productosList);
    }

    @PostMapping("/creatAll")
    public ResponseEntity<ProductosDto> crearProductWithMultiMediaAndDescription(@RequestBody ProductosDto dto) {

        ProductosDto nDtl = productoService.crearProductWithMultiMediaAndDescription(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(nDtl);
    }
}
