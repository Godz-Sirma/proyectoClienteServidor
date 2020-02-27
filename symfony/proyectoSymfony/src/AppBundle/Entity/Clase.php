<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Clase
 *
 * @ORM\Table(name="clase")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ClaseRepository")
 */
class Clase
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\OneToMany(targetEntity="Sesion", mappedBy="xclase")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="xprofesor", type="integer")
     * @ORM\ManyToOne(targetEntity="Profesor", inversedBy="id")
     * @ORM\JoinColumn(name="xprofesor",referencedColumnName="id")
     */
    private $xprofesor;

    /**
     * @var string
     *
     * @ORM\Column(name="xactividad", type="string", length=255)
     * @ORM\ManyToOne(targetEntity="Actividad", inversedBy="ksnombre")
     * @ORM\JoinColumn(name="xactividad",referencedColumnName="ksnombre")
     */
    private $xactividad;

    /**
     * @var int
     *
     * @ORM\Column(name="asprecio", type="integer")
     */
    private $asprecio;


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
     * Set xprofesor
     *
     * @param integer $xprofesor
     *
     * @return Clase
     */
    public function setXprofesor($xprofesor)
    {
        $this->xprofesor = $xprofesor;

        return $this;
    }

    /**
     * Get xprofesor
     *
     * @return int
     */
    public function getXprofesor()
    {
        return $this->xprofesor;
    }

    /**
     * Set xactividad
     *
     * @param string $xactividad
     *
     * @return Clase
     */
    public function setXactividad($xactividad)
    {
        $this->xactividad = $xactividad;

        return $this;
    }

    /**
     * Get xactividad
     *
     * @return string
     */
    public function getXactividad()
    {
        return $this->xactividad;
    }

    /**
     * Set asprecio
     *
     * @param integer $asprecio
     *
     * @return Clase
     */
    public function setAsprecio($asprecio)
    {
        $this->asprecio = $asprecio;

        return $this;
    }

    /**
     * Get asprecio
     *
     * @return int
     */
    public function getAsprecio()
    {
        return $this->asprecio;
    }
}

