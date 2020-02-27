<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Sesion
 *
 * @ORM\Table(name="sesion")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SesionRepository")
 */
class Sesion
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
     * @ORM\Column(name="xdni", type="integer")
     * @ORM\ManyToOne(targetEntity="Usuarios", inversedBy="id")
     * @ORM\JoinColumn(name="xdni",referencedColumnName="id")
     */
    private $xdni;

    /**
     * @var int
     *
     * @ORM\Column(name="xclase", type="integer")
     * @ORM\ManyToOne(targetEntity="Clase", inversedBy="id")
     * @ORM\JoinColumn(name="xclase",referencedColumnName="id")
     */
    private $xclase;

    /**
     * @var string
     *
     * @ORM\Column(name="asfecha", type="string", length=255, unique=true)
     */
    private $asfecha;

    /**
     * @var int
     *
     * @ORM\Column(name="xprecio", type="integer")
     * @ORM\ManyToOne(targetEntity="Clase", inversedBy="asprecio")
     * @ORM\JoinColumn(name="xprecio",referencedColumnName="id")
     */
    private $xprecio;


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
     * Set xdni
     *
     * @param integer $xdni
     *
     * @return Sesion
     */
    public function setXdni($xdni)
    {
        $this->xdni = $xdni;

        return $this;
    }

    /**
     * Get xdni
     *
     * @return int
     */
    public function getXdni()
    {
        return $this->xdni;
    }

    /**
     * Set xclase
     *
     * @param integer $xclase
     *
     * @return Sesion
     */
    public function setXclase($xclase)
    {
        $this->xclase = $xclase;

        return $this;
    }

    /**
     * Get xclase
     *
     * @return int
     */
    public function getXclase()
    {
        return $this->xclase;
    }

    /**
     * Set asfecha
     *
     * @param string $asfecha
     *
     * @return Sesion
     */
    public function setAsfecha($asfecha)
    {
        $this->asfecha = $asfecha;

        return $this;
    }

    /**
     * Get asfecha
     *
     * @return string
     */
    public function getAsfecha()
    {
        return $this->asfecha;
    }

    /**
     * Set xprecio
     *
     * @param integer $xprecio
     *
     * @return Sesion
     */
    public function setXprecio($xprecio)
    {
        $this->xprecio = $xprecio;

        return $this;
    }

    /**
     * Get xprecio
     *
     * @return int
     */
    public function getXprecio()
    {
        return $this->xprecio;
    }
}

