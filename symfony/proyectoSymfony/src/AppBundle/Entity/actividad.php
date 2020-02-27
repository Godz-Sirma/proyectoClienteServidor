<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Actividad
 *
 * @ORM\Table(name="actividad")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ActividadRepository")
 */
class Actividad
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
     * @var string
     *
     * @ORM\Column(name="ksnombre", type="string", length=255, unique=true)
     * @ORM\OneToMany(targetEntity="Clase", mappedBy="xactividad")
     */
    private $ksnombre;

    public function __construct(){
        $this->ksnombre=new ArrayCollection();
    }

    public function __toString(){
        return $this->ksnombre;
    }

    public function addKsnombre($ksnombre){
        $this->ksnombre[]=$ksnombre;
    }

    

    /**
     * @var string
     *
     * @ORM\Column(name="ascategoria", type="string", length=255)
     * 
     */
    private $ascategoria;

    /**
     * @var int
     *
     * @ORM\Column(name="aigrupoedad", type="integer")
     */
    private $aigrupoedad;


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
     * Set ksnombre
     *
     * @param string $ksnombre
     *
     * @return Actividad
     */
    public function setKsnombre($ksnombre)
    {
        $this->ksnombre = $ksnombre;

        return $this;
    }

    /**
     * Get ksnombre
     *
     * @return string
     */
    public function getKsnombre()
    {
        return $this->ksnombre;
    }

    /**
     * Set ascategoria
     *
     * @param string $ascategoria
     *
     * @return Actividad
     */
    public function setAscategoria($ascategoria)
    {
        $this->ascategoria = $ascategoria;

        return $this;
    }

    /**
     * Get ascategoria
     *
     * @return string
     */
    public function getAscategoria()
    {
        return $this->ascategoria;
    }

    /**
     * Set aigrupoedad
     *
     * @param integer $aigrupoedad
     *
     * @return Actividad
     */
    public function setAigrupoedad($aigrupoedad)
    {
        $this->aigrupoedad = $aigrupoedad;

        return $this;
    }

    /**
     * Get aigrupoedad
     *
     * @return int
     */
    public function getAigrupoedad()
    {
        return $this->aigrupoedad;
    }
}

