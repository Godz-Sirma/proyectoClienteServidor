<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Usuarios
 *
 * @ORM\Table(name="usuarios")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UsuariosRepository")
 */
class Usuarios
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\OneToMany(targetEntity="Profesor", mappedBy="xidni")
     * @ORM\OneToMany(targetEntity="Sesion", mappedBy="xdni")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="asnombre", type="string", length=255)
     */
    private $asnombre;

    /**
     * @var string
     *
     * @ORM\Column(name="asapellido", type="string", length=255)
     */
    private $asapellido;

    /**
     * @var string
     *
     * @ORM\Column(name="asdireccion", type="string", length=255)
     */
    private $asdireccion;

    /**
     * @var int
     *
     * @ORM\Column(name="aiedad", type="integer")
     */
    private $aiedad;

    /**
     * @var string
     *
     * @ORM\Column(name="asrol", type="string", length=255)
     */
    private $asrol;


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
     * Set asnombre
     *
     * @param string $asnombre
     *
     * @return Usuarios
     */
    public function setAsnombre($asnombre)
    {
        $this->asnombre = $asnombre;

        return $this;
    }

    /**
     * Get asnombre
     *
     * @return string
     */
    public function getAsnombre()
    {
        return $this->asnombre;
    }

    /**
     * Set asapellido
     *
     * @param string $asapellido
     *
     * @return Usuarios
     */
    public function setAsapellido($asapellido)
    {
        $this->asapellido = $asapellido;

        return $this;
    }

    /**
     * Get asapellido
     *
     * @return string
     */
    public function getAsapellido()
    {
        return $this->asapellido;
    }

    /**
     * Set asdireccion
     *
     * @param string $asdireccion
     *
     * @return Usuarios
     */
    public function setAsdireccion($asdireccion)
    {
        $this->asdireccion = $asdireccion;

        return $this;
    }

    /**
     * Get asdireccion
     *
     * @return string
     */
    public function getAsdireccion()
    {
        return $this->asdireccion;
    }

    /**
     * Set aiedad
     *
     * @param integer $aiedad
     *
     * @return Usuarios
     */
    public function setAiedad($aiedad)
    {
        $this->aiedad = $aiedad;

        return $this;
    }

    /**
     * Get aiedad
     *
     * @return int
     */
    public function getAiedad()
    {
        return $this->aiedad;
    }

    /**
     * Set asrol
     *
     * @param string $asrol
     *
     * @return Usuarios
     */
    public function setAsrol($asrol)
    {
        $this->asrol = $asrol;

        return $this;
    }

    /**
     * Get asrol
     *
     * @return string
     */
    public function getAsrol()
    {
        return $this->asrol;
    }
}

