<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Profesor
 *
 * @ORM\Table(name="profesor")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ProfesorRepository")
 */
class Profesor
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\OneToMany(targetEntity="Clase", mappedBy="xprofesor")
     */
    private $id;

    public function __construct(){
        $this->id=new ArrayCollection();
    }

    public function __toString(){
        return $this->id;
    }

    public function addId($id){
        $this->id[]=$id;
    }

    /**
     * @var int
     *
     * @ORM\Column(name="xiDni", type="integer", unique=true)
     * @ORM\ManyToOne(targetEntity="Usuario", inversedBy="id")
     * @ORM\JoinColumn(name="xidni",referencedColumnName="id")
     */
    private $xiDni;

    /**
     * @var string
     *
     * @ORM\Column(name="asmensaje", type="string", length=255)
     */
    private $asmensaje;

    /**
     * @var string
     *
     * @ORM\Column(name="asimagen", type="string", length=255)
     */
    private $asimagen;


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
     * Set xiDni
     *
     * @param integer $xiDni
     *
     * @return Profesor
     */
    public function setXiDni($xiDni)
    {
        $this->xiDni = $xiDni;

        return $this;
    }

    /**
     * Get xiDni
     *
     * @return int
     */
    public function getXiDni()
    {
        return $this->xiDni;
    }

    /**
     * Set asmensaje
     *
     * @param string $asmensaje
     *
     * @return Profesor
     */
    public function setAsmensaje($asmensaje)
    {
        $this->asmensaje = $asmensaje;

        return $this;
    }

    /**
     * Get asmensaje
     *
     * @return string
     */
    public function getAsmensaje()
    {
        return $this->asmensaje;
    }

    /**
     * Set asimagen
     *
     * @param string $asimagen
     *
     * @return Profesor
     */
    public function setAsimagen($asimagen)
    {
        $this->asimagen = $asimagen;

        return $this;
    }

    /**
     * Get asimagen
     *
     * @return string
     */
    public function getAsimagen()
    {
        return $this->asimagen;
    }
}

