<?php

namespace App\Command;

use App\Entity\Reservacion;
use App\Services\RemoteDatabaseQueries;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;


#[AsCommand(
    name: 'app:anular:reservacion',
    description: 'Comando para anular reservaciones incompletas',
)]
class AnularReservacionCommand extends Command
{

    public function __construct(private LoggerInterface $loggerInterface, private RemoteDatabaseQueries $remoteDatabaseQueries, private EntityManagerInterface $entityManagerInterface, private $RESERVACION_MINUTOS)
    {
        parent::__construct();
    }
    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {

        return Command::SUCCESS;

        if ($reservaciones = $this->entityManagerInterface->getRepository(Reservacion::class)->getReservacionVencidas($this->RESERVACION_MINUTOS + 5)) {
            foreach ($reservaciones as $reservacion) {

                if ($reservacion->getBoletoTicketId()) {

                    $result = $this->remoteDatabaseQueries->anularReservacion($reservacion);

                    if (isset($result['error'])) {
                        $this->loggerInterface->error('Anular reservacion ' . $reservacion->getBoletoTicketId() . ' error: ' . $result['error'] ?? '');
                    }
                } else {
                    $reservacion->setStatus(Reservacion::STATUS_ANULADA);
                }
            }
            $this->entityManagerInterface->flush();
        }
        return Command::SUCCESS;
    }
}
