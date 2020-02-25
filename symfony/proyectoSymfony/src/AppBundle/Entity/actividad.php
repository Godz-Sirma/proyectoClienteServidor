<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * actividad
 *
 * @ORM\Table(name="actividad")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\actividadRepository")
 */
class actividad
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="kiCodigo", type="integer", unique=true)
     */
    private $kiCodigo;

    /**
     * @var string
     *
     * @ORM\Column(name="asNombre", type="string", length=255, unique=true)
     */
    private $asNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="asCategoria", type="string", length=255)
     */
    private $asCategoria;

    /**
     * @var string
     *
     * @ORM\Column(name="aiGrupoEdad", type="string", length=255)
     */
    private $aiGrupoEdad;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set kiCodigo
     *
     * @param integer $kiCodigo
     *
     * @return actividad
     */
    public function setKiCodigo($kiCodigo)
    {
        $this->kiCodigo = $kiCodigo;

        return $this;
    }

    /**
     * Get kiCodigo
     *
     * @return int
     */
    public function getKiCodigo()
    {
        return $this->kiCodigo;
    }

    /**
     * Set asNombre
     *
     * @param string $asNombre
     *
     * @return actividad
     */
    public function setAsNombre($asNombre)
    {
        $this->asNombre = $asNombre;

        return $this;
    }

    /**
     * Get asNombre
     *
     * @return string
     */
    public function getAsNombre()
    {
        return $this->asNombre;
    }

    /**
     * Set asCategoria
     *
     * @param string $asCategoria
     *
     * @return actividad
     */
    public function setAsCategoria($asCategoria)
    {
        $this->asCategoria = $asCategoria;

        return $this;
    }

    /**
     * Get asCategoria
     *
     * @return string
     */
    public function getAsCategoria()
    {
        return $this->asCategoria;
    }

    /**
     * Set aiGrupoEdad
     *
     * @param string $aiGrupoEdad
     *
     * @return actividad
     */
    public function setAiGrupoEdad($aiGrupoEdad)
    {
        $this->aiGrupoEdad = $aiGrupoEdad;

        return $this;
    }

    /**
     * Get aiGrupoEdad
     *
     * @return string
     */
    public function getAiGrupoEdad()
    {
        return $this->aiGrupoEdad;
    }
}

